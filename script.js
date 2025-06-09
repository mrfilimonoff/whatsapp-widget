AMOCRM.addNotificationCallback('widget_on_card', function () {
  const contact = AMOCRM.data.current_card.main_contact;
  let phoneNumber = null;

  if (contact && contact.custom_fields_values) {
    const phoneField = contact.custom_fields_values.find(f => f.field_code === 'PHONE');
    if (phoneField && phoneField.values.length > 0) {
      phoneNumber = phoneField.values[0].value.replace(/[^\d+]/g, '');
    }
  }

  if (phoneNumber) {
    const button = document.createElement('button');
    button.innerText = 'Написать в WhatsApp';
    button.style = 'margin:10px;padding:8px 12px;background-color:#25D366;color:white;border:none;border-radius:5px;cursor:pointer;';
    button.onclick = () => {
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
    };

    const container = document.querySelector('.card-fields__top');
    if (container) container.appendChild(button);
  }

  return true;
});
