import  { useContext, useRef } from 'react'
import './NewVideo.css';
import { MultimediaContext } from '../../Context';
import {  useNavigate } from 'react-router-dom';

const NewVideo = () => {
    const { videos, setVideos, setIsSuccessful } = useContext(MultimediaContext);

    const form = useRef(null);
    const navigate = useNavigate();
    const createNewVideo = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            titulo: formData.get('titulo'),
            equipo: formData.get('equipo'),
            imagen: formData.get('imagen'),
            url: formData.get('url'),
            descripcion: formData.get('descripcion')
        }
        if (!data.titulo || !data.equipo || !data.imagen || !data.url || !data.descripcion) {
            alert("Todos los campos son requeridos");
            return;
        }
        const stringifiedVideo = JSON.stringify(data)
        try {
            //send video
            const conection = await fetch('http://localhost:3000/videos', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: stringifiedVideo
            });
            if (conection.ok) {
                const newVideo = await conection.json();
                setVideos([...videos, newVideo]);
                form.current.reset();
                setIsSuccessful(true);
                navigate('/success');
            } else {
                console.log("Error al crear video");
            }
        } catch (error) {
            setIsSuccessful(false);
            navigate('/success');
        }
    }

    return (
        <div className='newVideo_container'>
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARAJETA</p>
            <div className='newForm_container'>
                <h2>Crear Tarjeta</h2>
                <form ref={form} className='newVideo_form' onSubmit={createNewVideo}>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="titulo">Título</label>
                            <input type="text" name='titulo' placeholder='Qué es Javascript?' required />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="equipo">Categoría</label>
                            <select name="equipo" id="equipo" required>
                                <option value="Front end" className='option'>Front end</option>
                                <option value="Back end" className='option'>Back end</option>
                                <option value="Innovación y gestión" className='option'>Innovación y gestión</option>
                                <option value="Inteligencia Artificial" className='option'>Inteligencia Artificial</option>
                            </select>
                        </div>
                    </div>
                    <div className='grouped_inputs_container'>
                        <div className='grouped_inputs'>
                            <label htmlFor="imagen">Imagen</label>
                            <input type="text" name='imagen' placeholder='https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true' required />
                        </div>
                        <div className='grouped_inputs'>
                            <label htmlFor="url">Video</label>
                            <input type="text" name='url' placeholder='https://www.youtube.com/embed/QjOWz9avkg8' required />
                        </div>
                    </div>
                    <div className='grouped_inputs'>
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea name="descripcion" id="descripcion" placeholder='Escribe la descripción del video aquí' required></textarea>
                    </div>
                    <div className='newVideo_buttons_container'>
                        <button className='form_button btn-guardar'>GUARDAR</button>
                        <input type="reset" className='form_button btn-limpiar' value='LIMPIAR' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export { NewVideo }