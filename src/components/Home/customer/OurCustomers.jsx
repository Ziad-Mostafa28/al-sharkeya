// import React from 'react';
// import styles from './OurCustomers.module.css';
// import { Link } from 'react-router-dom';

// const customers = [
//   { id: 1, img: '/img/homepage/coca.png', alt: 'Coca Cola' },
//   { id: 2, img: '/img/homepage/pepsi.png', alt: 'Pepsi' },
//   { id: 3, img: '/img/homepage/juhayna.png', alt: 'Juhayna' },
//   { id: 4, img: '/img/homepage/edita.png', alt: 'Edita' },
// ];

// export default function OurCustomers() {
//   return (
//     <section className={`${styles.ourCustomers}`}>
//       <div className="">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h3 className="fw-bold m-0">Our Customers</h3>
//           <Link to={'our-customer'} className={styles.viewAll}>View all</Link>
//         </div>

//         <div className={`d-flex flex-wrap ${styles.logosWrapper}`}>
//           {customers.map(customer => (
//             <div key={customer.id} className={styles.logoBox}>
//               <img src={customer.img} alt={customer.alt} className={styles.logoImg} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import styles from './OurCustomers.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OurCustomers() {
  const { data } = useSelector((state) => state.homeWithOrdering);

  const ourCustomersSection = data?.data?.sections?.find(
    (section) => section.our_customers
  );

  const customers = ourCustomersSection?.our_customers?.list || [];

  return (
    <section className={styles.ourCustomers}>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold m-0">Our Customers</h3>
          <Link to={'our-customer'} className={styles.viewAll}>
            View all
          </Link>
        </div>

        <div className={`d-flex flex-wrap ${styles.logosWrapper}`}>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <div key={customer.id} className={styles.logoBox}>
                <img
                  src={customer.image}
                  alt={customer.name}
                  className={styles.logoImg}
                />
              </div>
            ))
          ) : (
            <p className="text-center w-100">No customers available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
