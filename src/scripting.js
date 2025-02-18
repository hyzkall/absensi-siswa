// Fungsi untuk toggle Mode Gelap
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  
  // Event listener untuk tombol Mode Gelap
  document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
  
  // Data Absensi untuk Grafik
  const attendanceData = {
    labels: ['Hadir', 'Izin', 'Tidak Hadir'],  // Kategori absensi
    datasets: [{
      label: 'Absensi Siswa',
      data: [75, 15, 10], // Contoh data: 75% hadir, 15% izin, 10% tidak hadir
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      hoverOffset: 4
    }]
  };
  
  // Pastikan Chart.js dimuat terlebih dahulu, baru jalankan kode ini
  window.onload = function() {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(ctx, {
      type: 'pie', // Grafik tipe pie
      data: attendanceData,
    });
  };
  
  // Pencarian Siswa
  document.getElementById('searchStudent').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const students = ['Ali', 'Budi', 'Cici', 'Dewi', 'Eka']; // Contoh data siswa
    const filteredStudents = students.filter(student => student.toLowerCase().includes(searchQuery));
  
    console.log(filteredStudents); // Menampilkan siswa yang ditemukan sesuai pencarian
  });
  