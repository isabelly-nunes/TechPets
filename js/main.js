      const checkboxs = document.querySelectorAll(".habilitarCheckbox");
      checkboxs.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          if (this.checked) {
            checkboxs.forEach(function (otherCheckbox) {
              if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
              }
            });
          }
        });
      });

