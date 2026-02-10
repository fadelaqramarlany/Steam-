# Panduan Hosting Website Gratis & Domain Subdomain

Selamat! Anda sudah memiliki kode untuk website **FadelWeb**. Untuk membuat website ini online (dapat diakses siapa saja melalui link), Anda bisa menggunakan layanan gratis berikut:

## 1. Persiapan: Simpan Kode di GitHub
Langkah pertama adalah mengunggah kode ini ke GitHub.
1. Buat akun di [github.com](https://github.com).
2. Buat repositori baru (misalnya: `FADELWEB.IO`).
3. Unggah semua file proyek ini ke repositori tersebut.

---

## 2. Pilihan Hosting Gratis (Otomatis dapat Link/Subdomain)

### Opsi A: Vercel (Paling Mudah & Populer untuk React)
Vercel akan memberikan Anda link seperti `nama-proyek.vercel.app`.
1. Masuk ke [vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
2. Klik **"Add New"** -> **"Project"**.
3. Pilih repositori GitHub yang tadi Anda buat.
4. Klik **"Deploy"**.
5. Tunggu 1-2 menit, dan website Anda akan aktif!

### Opsi B: Netlify
Netlify memberikan link seperti `nama-proyek.netlify.app`.
1. Masuk ke [netlify.com](https://netlify.com) dengan akun GitHub.
2. Klik **"Add new site"** -> **"Import an existing project"**.
3. Pilih GitHub dan pilih repositori Anda.
4. Klik **"Deploy site"**.

### Opsi C: GitHub Pages (Cocok untuk FADELWEB.IO)
Karena Anda sudah menggunakan GitHub Pages, berikut cara menggunakannya untuk proyek ini:
1. Pastikan file `vite.config.js` sudah memiliki properti `base`. Contoh: `base: '/FADELWEB.IO/'`.
2. Instal package gh-pages: `npm install gh-pages --save-dev`.
3. Tambahkan script ini di `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Jalankan `npm run deploy`.
5. Buka tab **Settings** -> **Pages** di repo GitHub Anda dan pilih branch `gh-pages` sebagai sumber.

> **Catatan:** Proyek ini sudah menggunakan `HashRouter` agar navigasi (pindah halaman) tetap berfungsi dengan baik di GitHub Pages tanpa error 404 saat halaman di-refresh.

---

## 3. Cara Mendapatkan Domain ".com" Secara Gratis?
Biasanya domain premium seperti `.com`, `.net`, atau `.id` adalah berbayar. Namun, Anda bisa mendapatkan link gratis selamanya menggunakan subdomain dari layanan di atas (contoh: `fadelweb.vercel.app`).

Jika Anda benar-benar ingin domain khusus:
- **GitHub Student Developer Pack:** Jika Anda seorang pelajar, Anda bisa mendapatkan domain `.me` gratis selama 1 tahun melalui [education.github.com](https://education.github.com/pack).
- **Freenom (Jika tersedia):** Dulu menyediakan domain `.tk`, `.ml`, `.ga`, namun saat ini sering mengalami gangguan.

---

## 4. Cara Menjalankan Proyek Ini di Komputer Anda
Jika Anda ingin mengedit kode ini lagi di komputer sendiri:
1. Pastikan sudah instal **Node.js**.
2. Buka terminal di folder proyek.
3. Jalankan `npm install` (untuk instal bahan-bahan).
4. Jalankan `npm run dev` (untuk melihat perubahan secara langsung).

---

**Saran Saya:** Gunakan **Vercel** karena sangat cepat dan otomatis memperbarui website setiap kali Anda mengubah kode di GitHub.
