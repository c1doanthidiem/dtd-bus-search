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
            <b>Tuyến: ${i.tuyen}</b><br>
            Điểm đi/đón: ${i.diemDon}<br>
            Giờ đi: ${i.gioDi}<br>
            Giờ về: ${i.gioVe}<br>
            Giám sát xe: ${i.giaoVien}<br>
            SĐT: ${i.dienThoai}
        </div>
    `).join('');
};
