function underline(clickedItem) {
    const listItems = document.querySelectorAll('#myList li');
    listItems.forEach(item => {
      if (item !== clickedItem) {
        item.style.textDecoration = 'none';
      }
    });
    clickedItem.style.textDecoration = 'underline';
  }
