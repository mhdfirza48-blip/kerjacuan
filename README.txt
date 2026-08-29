KERJACUAN - FIREBASE ADMIN + WORKER

1. Firebase Console
- Authentication -> Sign-in method -> aktifkan Email/Password.
- Firestore Database -> Create database.
- Buka Rules lalu tempel isi firestore.rules.
- Pastikan project: kerjacuan-374dd.

2. Upload ke GitHub Pages
- Upload semua file ke repository.
- Settings -> Pages -> Deploy from branch -> main / root.
- Buka URL GitHub Pages.

3. Membuat ADMIN
Jangan membuat role admin dari halaman register.
- Daftar dulu lewat register.html.
- Firebase Console -> Firestore Database -> Data -> users.
- Cari dokumen dengan ID UID akun admin.
- Ubah field role dari "worker" menjadi "admin".
- Login ulang melalui login.html.
- Admin akan diarahkan ke admin.html.

4. Alur
ADMIN:
Tambah Job -> job tampil -> lihat submission -> Approve + Saldo.

WORKER:
Daftar/Login -> lihat Job -> Kerjakan -> kirim hasil -> menunggu approval -> saldo bertambah.

5. Keamanan
- Jangan meminta password Gmail, OTP, recovery code, atau credential akun kepada pekerja.
- Reward hanya ditambahkan lewat transaksi saat admin approve.
- Jangan pernah menaruh service-account private key di GitHub atau browser.
