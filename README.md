# Nibiru Cloud Storage

Service API untuk mengunggah gambar dan/atau video secara online. Memanfaatkan AWS, GCP, dan Cloudinary.

Saya membangun service ini untuk kemudian digunakan sebagai tempat mengunggah gambar dan/atau video secara online saat sedang mengerjakan proyek latihan, portofolio, dan lainnya.

Service ini tidak dimaksudkan digunakan dalam real-world project.

## Daftar Service

1. AWS (S3) ✅
2. GCP (Google Drive) | On Progress
3. Cloudinary | On Progress

## Daftar Endpoint

### /upload/aws

- POST | `/upload/aws/image`
  - Body:
    - image (required | file)
  - Rules:
    - File extension yang diterima: ( .jpg | .jpeg | .png | .webp | .gif ).
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

COMING SOON

### /upload/cloudinary

COMING SOON
