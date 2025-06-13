define(["jquery", "underscore"], function ($, _) {
  var CustomWidget = function () {
    var self = this;

    this.callbacks = {
      render: function () {
        const $btn = $(
          '<button class="button-whatsapp">Написать в WhatsApp</button>'
        );

        $btn.css({
          background: "#25D366",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          margin: "10px 0",
        });

        $btn.on("click", function () {
          const custom_fields =
            AMOCRM.data.current_card.contact.custom_fields || [];
          const phoneField = custom_fields.find((f) =>
            f.name.toLowerCase().includes("телефон")
          );

          if (phoneField && phoneField.values.length) {
            const phone = phoneField.values[0].value.replace(/\D/g, "");
            const waLink = `https://wa.me/${phone}`;
            window.open(waLink, "_blank");
          } else {
            alert("Телефон не найден");
          }
        });

        setTimeout(() => {
          $(".card-widget__container").first().append($btn);
        }, 1000);

        return true;
      },

      init: function () {
        console.log("init");
        return true;
      },

      bind_actions: function () {
        return true;
      },

      destroy: function () {
        return true;
      },
    };

    return this;
  };

  return CustomWidget;
});
