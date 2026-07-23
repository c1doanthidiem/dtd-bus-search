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
            <h3 style="color:#1565C0;">🚌 ${i.tuyen}</h3>

            <p><strong style="color:#1976D2;">📍 Điểm đi:</strong> ${i.diemDon || ""}</p>

            <p><strong style="color:#2E7D32;">🕒 Giờ đi:</strong> ${i.gioDi || ""}</p>

            <p><strong style="color:#EF6C00;">📍 Điểm về:</strong> ${i.diemVe || ""}</p>

            <p><strong style="color:#8E24AA;">🕔 Giờ về:</strong> ${i.gioVe || ""}</p>

            <hr>

            <p><strong style="color:#3949AB;">👩‍🏫 Giáo viên:</strong> ${i.giaoVien || ""}</p>

            <p><strong style="color:#D32F2F;">📞 Liên hệ:</strong> ${(i.dienThoai || "").replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}</p>
        </div>
    `).join("");
};
