import { compressor, swal } from "../../../index";




const optimizeImageService = async( image:any ) => {
  
    const imageCompressor = await new Promise( resolv =>{

        new compressor( image, {
            quality: 0.7,
            maxWidth: 800,
            maxHeight: 800,
            success: ( result:any )=>{
                resolv( result );
            },
            error: ( err:any )=>{

                swal.fire({
                    text: 'Error al comprimir la imagen!',
                    color: 'red',
                    background: '#00000087',
                    confirmButtonColor:'#01a503'
                })
                console.log(`Error al comprimir la imagen!, ${err}`);
            }
        }) 
    })

    return imageCompressor;

}

export default optimizeImageService
