# Image Uploader

#### /api/image
### Request Body
form-data: 
    { 
        upload: image.png 
    }

### Response
    {
        urls: {
            '1200': image-1200.png,
            '800': image-800.png,
            '500': image-500.png,
            '300': image-300.png,
            '100': image-100.png,
            'default': image.png
        }
    }