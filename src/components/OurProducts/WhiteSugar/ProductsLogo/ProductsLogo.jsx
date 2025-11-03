import React from 'react'
import styles from './ProductsLogo.module.css'

export default function ProductsLogo() {


    const customers = [
  { id: 1, img: '/img/homepage/coca2.png', alt: 'Coca Cola' },
  { id: 2, img: '/img/homepage/pepsi2.png', alt: 'Pepsi' },
  { id: 3, img: '/img/homepage/edita2.png', alt: 'Edita' },
{ id: 4, img: '/img/homepage/juhayna2.png', alt: 'Juhayna' },

];
  return (
    <>
        <section className={`${styles.ourCustomers}`}>
          <div className="">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className={`${styles.h3}`}>We produce high-quality sugar tailored to customer requirements, supplying leading high-sugar consumers such as Coca-Cola, Pepsi, edita word add Juhayna, and others. The exceptional quality of our sugar ensures it meets the strict standards demanded by these major brands</h3>
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
