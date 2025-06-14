'use client'
import React from 'react'
import { IKImage, ImageKitProvider, IKUpload } from 'imagekitio-next' 
import ImageKit from 'imagekit';
import config from '@/lib/config';
const { 
    env: { 
        imagekit: { publicKey, privateKey, urlEndpoint },
    },
} = config;
const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);


    if(!response.ok){
      const errorText = await response.text();

      throw new Error(`Request failed with status ${response.status}: ${errorText} `,

      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature};

  } catch(error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  };
}


const ImageUpload = () => {
  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>

    </ImageKitProvider>
  )
}

export default ImageUpload


//1:43:50 image kit see dekhna hello
