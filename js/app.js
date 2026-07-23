result.innerHTML = list.map(i => `
<div class="card">
    <h3 style="color:#1565C0; margin-bottom:15px;">🚌 ${i.tuyen}</h3>

    <p><strong style="color:#1976D2;">📍 Điểm đi:</strong> ${i.diemDon || "Chưa cập nhật"}</p>

    <p><strong style="color:#2E7D32;">🕒 Giờ đi:</strong> ${i.gioDi || "Chưa cập nhật"}</p>

    <p><strong style="color:#E65100;">🏫 Điểm về:</strong> ${i.diemVe || "Chưa cập nhật"}</p>

    <p><strong style="color:#8E24AA;">🕔 Giờ về:</strong> ${i.gioVe || "Chưa cập nhật"}</p>

    <hr style="margin:12px 0;border:none;border-top:1px solid #eee;">

    <p><strong style="color:#3949AB;">👩‍🏫 Giáo viên:</strong> ${i.giaoVien}</p>

    <p><strong style="color:#D32F2F;">📞 Liên hệ:</strong> ${
      (i.dienThoai || "").replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
    }</p>
</div>
`).join('');
