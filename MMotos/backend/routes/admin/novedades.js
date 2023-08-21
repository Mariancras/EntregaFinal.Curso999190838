var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
//dependencias necesarias para la subida
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
//fin dependencias necesarias para la subida

const destroy = util.promisify(cloudinary.uploader.destroy);//dependencia para eliminar imagen



//para listar las novedades
router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades(); //debe ser var para poder usarla mas adelante.


  //--------enviar la imagen con cada novedad--------//
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: "pad"
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });
  //--------fin de enviar la imagen con cada novedad--------//

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
}); //fin listar novedades



//----------Agregar----------//
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {

      await novedadesModel.insertNovedad({
        ...req.body, //ver spread operator en js
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos con * son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    });
  }
});
//----------fin de gregar----------//


//----------Eliminar----------//

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

//----------eliminar imagen al borrar novedad------///
let novedad=await novedadesModel.getNovedadById(id);
if (novedad.img_id){
  await (destroy(novedad.img_id));
}
//----------fin eliminar imagen al borrar novedad------///

  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')

});
//----------fin de eliminar----------//




//----------Modificar----------//
router.get('/modificar/:id', async (req, res, next) => {

  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});


router.post('/modificar', async (req, res, next) => {
  try {

    //----------MODIFICAR una IMAGEN------///
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));

    }
    //---------Fin MODIFICAR una IMAGEN------///


    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la novedad'
    })
  }
})
//----------Fin modificar----------//




module.exports = router;
