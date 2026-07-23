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

  result.innerHTML = list
    .map(
      (i) => `
      <div class="card">
        <b>${i.tuyen}</b><br>
        ${i.diemDon}<br>
        ${i.gioDi}<br>
        <strong>${i.giaoVien}</strong><br>
        📞 ${i.dienThoai.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
      </div>
    `
    )
    .join("");
};
