
const form_fields = document.querySelectorAll('.investor_form-field')
const form_fields_array = Array.from(form_fields)

const date_field = document.querySelector('#date')
const price_field = document.querySelector('#price')
const guest_field = document.querySelector('#guests')

const discount_percent_field = document.querySelector('#discount')
const cash_redeem_field = document.querySelector('#cash_redeem')


const price = document.querySelector('#price_txt')
const negotiated_price = document.querySelector('#negotiated_price')
const discount_price = document.querySelector('#discount_price')
const final_price = document.querySelector('#final_price')

const view_imgs_btn = document.querySelector('#view_all_images')
const images_modal = document.querySelector('#more_images')
const modal_img_wrapper = document.querySelector('#modal_img_div')

const calendar_node = document.querySelector('.calender')

////////////DIPLAYING CALENDAR/////////////////////////////////

const calendar = new FullCalendar.Calendar(calendar_node, {
    
    initialView: 'dayGridMonth',
    selectable: true,
    headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
    },dateClick: function(info) {
        //alert('clicked ' + info.dateStr);
        let date_selected = info.date.toLocaleString('en-IN', {"dateStyle": "long"} )
        date_field.value = date_selected
      },
    events: [
        {
            title: 'Booked',
            date: '2023-05-09',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-05-10',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-05-13',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-05-22',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-06-03',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-06-12',
            backgroundColor: '#FF6296'
        },
        {
            title: 'Booked',
            date: '2023-06-26',
            backgroundColor: '#FF6296'
        }
    ]
  });
  calendar.render();

  ////////////DIPLAYING CALENDAR ENDS/////////////////////////////////


form_fields_array.forEach(function(el){
    el.addEventListener('keydown', (e)=>{
        if(e.keyCode == 13){
            e.preventDefault()
        }
    })
})


  //////////////CALCULATION////////////////

  let number
  price_field.addEventListener('focusout', ()=>{
     number =  price.textContent = price_field.value * guest_field.value
    price.textContent =  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)
    
  })


  guest_field.addEventListener('focusout', ()=>{
    
     number = guest_field.value * price_field.value

    price.textContent =  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number)
    
  })


  let price_after_discount
  let cash_redeem
  let final_price_value
  let negotiated_price_value

discount_percent_field.addEventListener('focusout', ()=>{
    negotiated_price_value =  discount_percent_field.value / 100 * number 
    price_after_discount = number - (discount_percent_field.value / 100 * number )
    negotiated_price.textContent = `(-)${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(negotiated_price_value)}`
    discount_price.textContent = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price_after_discount)
    
})

cash_redeem_field.addEventListener('focusout', ()=>{
     cash_redeem = cash_redeem_field.value
     final_price_value = price_after_discount - cash_redeem
    final_price.textContent = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(final_price_value)

    let total_saved = `${Number(negotiated_price_value) + Number(cash_redeem)}`
    console.log(total_saved)
    document.querySelector('#saved_txt').textContent = `You have saved upto ${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total_saved)}`
})



  //////////////CALCULATION ENDS////////////////


  /////////////////SHOWING IMAGES MODAL////////////////////

view_imgs_btn.addEventListener('click', ()=>{
    images_modal.style.display = 'flex'
})

images_modal.addEventListener('click', ()=>{
    images_modal.style.display = 'none'
})

modal_img_wrapper.addEventListener('click', (e)=>{
    e.stopPropagation()
})