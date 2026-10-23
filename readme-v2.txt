OUR LITTLE GARDEN 2.0 — OFFLINE PLUS
===================================

Isi paket
---------
- Jurnal harian: tanggal, mood, energi, cerita, rasa syukur
- Kalender bulanan dengan penanda jurnal
- Kalender menstruasi pribadi: catatan tanggal, mood, gejala, perkiraan siklus
- Sticker calendar: 72 gambar stiker chibi tanpa label nama
- Ganti foto utama dan cover dari galeri perangkat
- Habit tracker, to-do list, tanggal penting
- Export/import backup JSON
- PWA/service worker untuk cache aset dan pemakaian offline setelah dibuka online
- Desain pastel pink floral dan navigasi mobile

PENTING SEBELUM UPDATE
----------------------
1. Buka website versi lama saat online.
2. Masuk Notes > Export backup JSON, lalu simpan file backup di tempat aman.
3. Ekstrak ZIP ini. Upload folder `our-little-garden` (folder yang berisi index.html) ke deploy Netlify situs yang sama.
4. Buka website baru saat online agar service worker dan semua aset di-cache.
5. Import backup melalui Notes > Pulihkan dari backup bila diperlukan.
6. Tes foto, kalender, stiker, export/import, lalu Airplane Mode.

DATA & PRIVASI
--------------
- Data aplikasi disimpan di localStorage browser pada perangkat/origin yang sama.
- Foto pilihan disimpan sebagai data lokal di browser dan dapat membuat penyimpanan cepat penuh.
- Backup JSON dapat berisi jurnal, foto, catatan siklus, dan informasi pribadi. Simpan dengan aman dan jangan bagikan sembarangan.
- Tidak ada akun atau sinkronisasi cloud pada paket ini. Pindah perangkat tidak otomatis memindahkan data.
- Penyimpanan lokal bukan enkripsi khusus. Siapa pun yang dapat membuka browser/perangkat mungkin dapat mengakses data.
- Kalender menstruasi hanya perkiraan dan bukan metode kontrasepsi atau diagnosis medis.

CATATAN TEKNIS
--------------
- Skema penyimpanan lama `our-little-garden-v1` dipertahankan untuk kompatibilitas.
- Cache service worker diberi versi baru agar browser meminta aset v2.0 setelah deploy.
- Untuk mengurangi risiko data, jangan hapus data situs/Safari sebelum export backup.
- Offline bergantung pada browser berhasil memasang service worker dan menyimpan seluruh aset ketika online; selalu uji di perangkat target.
