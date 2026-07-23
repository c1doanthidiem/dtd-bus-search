const input = document.getElementById('keyword'),
      result = document.getElementById('result'),
      count = document.getElementById('count');

input.oninput = () => {
    const k = input.value.trim();
    if (!k) {
        count.innerHTML = '';
        result.innerHTML = '';
        return;
    }
    const list = searchBus(k);
    count.innerHTML = 'Tìm thấy ' + list.length + ' kết quả';
result.innerHTML = list.map(i => `
    <div class="card">
        <b>${i.tuyen}</b><br>
        <strong> Điểm đi:</strong> ${i.diemDon}<br>
        <strong> Giờ đi:</strong> ${i.gioDi}<br>
        <strong> Điểm về:</strong> ${i.diemVe}<br>
        <strong> Giờ về:</strong> ${i.gioVe}<br>
        <strong class="teacher">👩‍🏫 Giám sát xe:</strong> ${i.giaoVien}<br>
        <strong class="contact">📞 Liên hệ:</strong> ${i.dienThoai}
    </div>
`).join('');
};
