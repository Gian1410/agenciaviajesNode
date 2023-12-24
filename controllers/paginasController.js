import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async(req,res)=>{
    // consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))

    try {

        const resultado = await Promise.all(promiseDB);
        // tambien podemos usarlo sin destructurin con las reglas de los arrayas viajes: resultado[0], testimoniales : resultado[1]

        const [viajes, testimoniales] = resultado;
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros =  (req,res)=>{
    res.render('nosotros',{
        pagina:'Nosotros'
    })
}

const paginasViajes = async (req,res)=>{

    // consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina:'Proxímos Viajes',
        viajes,
    })
}

const paginasTestimoniales = async (req,res)=>{
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

// muestra un viaje por us slug
const paginasDetalleViaje = async (req,res) =>{
    const {slug} = req.params;
    try {
        const resultado = await Viaje.findOne({where:{slug:slug}});

        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginasViajes,
    paginasTestimoniales,
    paginasDetalleViaje
}