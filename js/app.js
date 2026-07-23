const input = document.getElementById("keyword");
const result = document.getElementById("result");
const count = document.getElementById("count");

input.oninput = () => {
  const k = input.value.trim();

  if (!k) {
    count.innerHTML = "";
    result.innerHTML = "";
    return;
  }

  const list = searchBus(k);

  count.innerHTML = `Tìm thấy ${list.length} kết quả`;

result.innerHTML = list.map(i => `
<div class="card">
    <h3>${i.tuyen}</h3>
    <p>📍 <strong>Điểm đón:</strong> ${i.diemDon}</p>
    <p>🕒 <strong>Giờ đón:</strong> ${i.gioDi}</p>
    <p>👩‍🏫 <strong>Giáo viên:</strong> ${i.giaoVien}</p>
    <p>📞 <strong>Liên hệ:</strong> ${i.dienThoai.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}</p>
</div>
`).join('');
