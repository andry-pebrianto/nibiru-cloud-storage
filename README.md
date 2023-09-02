# Nibiru Cloud Storage

Service API untuk mengunggah gambar dan/atau video secara online. Memanfaatkan AWS, GCP, dan Cloudinary.

Saya membangun service ini untuk kemudian digunakan sebagai tempat mengunggah gambar dan/atau video secara online saat sedang mengerjakan proyek latihan, portofolio, dan lainnya.

Service ini tidak dimaksudkan digunakan dalam real-world project.

## Service Available

1. AWS (S3) ✅
2. GCP (Google Drive) ✅
3. Cloudinary ✅

## Endpoint List

### /upload/aws

- POST | `/upload/aws/image`
  - Body:
    - image (required | file)
  - Rules:
    - File extension yang diterima: ( .jpg | .png | .webp | .gif ).
    - File size yang dikirim tidak boleh melebihi 2MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file gambar secara online menggunakan AWS S3.
- POST | `/upload/aws/video`
  - Body:
    - video (required | file)
  - Rules:
    - File extension yang diterima: ( .mp4 | .webm | .avi | .mkv ).
    - File size yang dikirim tidak boleh melebihi 30MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file video secara online menggunakan AWS S3.

### /upload/gcp

- POST | `/upload/gcp/image`
  - Body:
    - image (required | file)
  - Rules:
    - File extension yang diterima: ( .jpg | .png | .webp | .gif ).
    - File size yang dikirim tidak boleh melebihi 2MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file gambar secara online menggunakan Google Drive.
- POST | `/upload/gcp/video`
  - Body:
    - video (required | file)
  - Rules:
    - File extension yang diterima: ( .mp4 | .webm | .avi | .mkv ).
    - File size yang dikirim tidak boleh melebihi 30MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file video secara online menggunakan Google Drive.

### /upload/cloudinary

- POST | `/upload/cloudinary/image`
  - Body:
    - image (required | file)
  - Rules:
    - File extension yang diterima: ( .jpg | .png | .webp | .gif ).
    - File size yang dikirim tidak boleh melebihi 2MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file gambar secara online menggunakan Cloudinary.
- POST | `/upload/cloudinary/video`
  - Body:
    - video (required | file)
  - Rules:
    - File extension yang diterima: ( .mp4 | .webm | .avi | .mkv ).
    - File size yang dikirim tidak boleh melebihi 30MB.
    - Hanya boleh melampirkan 1 file di setiap request.
  - Desc: Endpoint untuk mengunggah file video secara online menggunakan Cloudinary.

## Demo

https://nibiru-cloud-storage.onrender.com

<b>Note</b>: API mungkin akan loading cukup lama, hal ini wajar karena saya meng-hosting API-nya di layanan PaaS gratisan. Tolong bersabar 😆.

## Try It Out

https://try-nibiru-cloud.netlify.app

## Authors

Contributors names and contact info:

1. Andry Pebrianto.

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
