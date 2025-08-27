import React from 'react'
import styles from './ProductsLogo.module.css'

export default function ProductsLogo() {


    const customers = [
  { id: 1, img: '/img/homepage/coca.png', alt: 'Coca Cola' },
  { id: 2, img: '/img/homepage/pepsi.png', alt: 'Pepsi' },
  { id: 3, img: '/img/homepage/edita.png', alt: 'Edita' },
{ id: 4, img: '/img/homepage/juhayna.png', alt: 'Juhayna' },

];
  return (
    <>
        <section className={`${styles.ourCustomers}`}>
          <div className="">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className={`${styles.h3}`}>Producing high quality of produced sugar according to customer needs which sales to high sugar consumers like cola, Pepsi, Edita … due to high produced sugar quality.</h3>
            </div>
    
            <div className={`d-flex flex-wrap ${styles.logosWrapper}`}>
              {customers.map(customer => (
                <div key={customer.id} className={styles.logoBox}>
                  <img src={customer.img} alt={customer.alt} className={styles.logoImg} />
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
