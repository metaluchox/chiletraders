export const fileUpload = async ( file ) => {
    

    const clouUrl = "https://api.cloudinary.com/v1_1/dqbiuijfd/upload";
    const formData = new FormData();
    formData.append('upload_preset', 'react-chiletraders');
    formData.append('file', file);

    try {

        const resp = await fetch(clouUrl, {
            method: 'POST',
            body: formData
        });

        if( resp.ok ){
            const clouResp = await resp.json();
            return clouResp.secure_url;
            
        }else{
            throw await resp.json();
        }
        
    } catch (error) {
        console.log(error);
    }


}