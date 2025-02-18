<?php
// Koneksi ke database MySQL
$servername = "localhost"; // Ganti dengan host server kamu jika perlu
$username = "root"; // Username MySQL
$password = ""; // Password MySQL
$dbname = "absensi_siswa"; // Nama basis data yang kamu buat di phpMyAdmin

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query untuk mengambil data absensi
$sql = "SELECT status, COUNT(*) as jumlah FROM absensi GROUP BY status";
$result = $conn->query($sql);

// Membuat array untuk menampung hasil query
$absensi_data = array();

if ($result->num_rows > 0) {
    // Output data untuk setiap baris
    while($row = $result->fetch_assoc()) {
        $absensi_data[] = $row;
    }
}

// Mengirimkan data dalam format JSON
echo json_encode($absensi_data);

// Menutup koneksi
$conn->close();
?>
