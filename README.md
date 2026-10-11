# Habib Portfolio — HTML + Tailwind CSS + JavaScript

## Menjalankan
1. Extract folder ini.
2. Buka `index.html` di browser, atau pakai extension Live Server di VS Code.
3. Tailwind dan Google Fonts memakai CDN, jadi koneksi internet diperlukan untuk styling/font.

## Yang perlu kamu edit
- `index.html` → cari `SITE CONFIG` untuk mengganti email dan GitHub.
- Array `programmingProjects` → ubah nama, deskripsi, screenshot, link demo, dan source code.
- Array `visualProjects` → ubah judul, deskripsi, dan path video portrait.
- Letakkan screenshot di `assets/images/`.
- Letakkan video MP4/WebM vertikal di `assets/videos/`.

## Folder aset
Buat folder ini di samping `index.html`:
- `assets/images/`
- `assets/videos/`

Nama file yang dipakai sebagai contoh:
- images: `weather-app.jpg`, `calculator.jpg`, `charity.jpg`
- images poster: `product-story-poster.jpg`, `behind-scenes-poster.jpg`, `visual-diary-poster.jpg`
- videos: `product-story.mp4`, `behind-the-scenes.mp4`, `visual-diary.mp4`

Kalau file aset belum ada, bagian preview tetap menampilkan placeholder/gradient.
Untuk video, pastikan file path benar. Browser tidak bisa memainkan URL file lokal komputer lain; deploy file video bersama situs atau gunakan URL video yang memang dapat diakses publik.

## Catatan
- Desain dibuat responsif untuk HP, tablet, dan desktop.
- Filter kategori proyek, menu mobile, animasi reveal, dan modal preview video sudah menggunakan JavaScript.
- Gunakan video milik sendiri atau yang sudah mendapat izin. Mengunduh konten Instagram dan memublikasikannya ulang bisa memerlukan izin pemilik hak cipta.
- Tailwind CDN cocok untuk prototipe/belajar. Untuk website production, sebaiknya gunakan Tailwind CLI/build.


## File JavaScript
Logika interaktif berada di `js/script.js`, yang dipanggil oleh `index.html` melalui `<script src="js/script.js" defer></script>`. Untuk mengganti email, GitHub, atau data proyek, edit bagian `SITE CONFIG`, `programmingProjects`, dan `visualProjects` di file tersebut.
