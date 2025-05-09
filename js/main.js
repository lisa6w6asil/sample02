document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    // ギャラリーの画像を取得
    document.querySelectorAll(".gallery img").forEach(function (img) {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
      });
    });
  
    // 閉じるボタン
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // モーダルの外側クリックで閉じる
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  