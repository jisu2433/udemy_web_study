const form = document.querySelector('form');
const listContainer = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addList(productInput.value, qtyInput.value)
    productInput.value='';
    qtyInput.value='';
});

const addList = (product, qty) => {
    const newList = document.createElement('li');
    newList.innerText = (`${qty} ${product}`);
    listContainer.appendChild(newList)
}