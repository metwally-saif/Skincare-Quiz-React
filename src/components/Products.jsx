import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Products() {
    const storedFavs = JSON.parse(sessionStorage.getItem("fav"));
    const [favs, setFavs] = useState(storedFavs || []);    
    const [items, setItems] = useState([])
    const navigate = useNavigate();
    let answers = JSON.parse(sessionStorage.getItem("Answers"))

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 999, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      function getRandomElements(arr, numElements) {
        if (numElements >= arr.length) {
          return arr.slice();
        }
      
        const shuffled = arr.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, numElements);
      }

      const filterData = (data) => {
        let filtered = [];
      
        data.products.forEach(product => {
          if (favs.includes(product.id)) {
            filtered.push(product);
          } else if (
            product.title.includes(answers.q3) ||
            product.title.includes(answers.q4) ||
            product.tags.some(tag => tag.includes(answers.q3)) ||
            product.tags.some(tag => tag.includes(answers.q4))
          ) {
            filtered.push(product);
          }
        });
      
        if (filtered.length < 7) {
          const randomElements = getRandomElements(data.products, 7 - filtered.length);
          filtered = filtered.concat(randomElements);
        }
        return filtered;
      };


      const addToFav = (e, id) => {
        if (favs.includes(id)) {
          const updatedFavs = favs.filter(favId => favId !== id);
          setFavs(updatedFavs);
          sessionStorage.setItem("fav", JSON.stringify(updatedFavs));
        } else {
          const updatedFavs = [...favs, id];
          setFavs(updatedFavs);
          sessionStorage.setItem("fav", JSON.stringify(updatedFavs));
        }
      };
  
      useEffect(() => {
          if (answers.started == false) {
              navigate('/');
              return;
          };
          console.log(answers);
          axios.get('https://jeval.com.au/collections/hair-care/products.json?page=1')
          .then(res => setItems(filterData(res.data)))
          .catch(err => console.log(err));
      }, [])

      const itemElements = items.map((item, i) => (
        <div key={i} className='products'>
            <span onClick={(e) => addToFav(e, item.id)} className='fav'>
                <img className='favicon' src={(favs.includes(item.id)) ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2048px-Heart_coraz%C3%B3n.svg.png' : "src/assets/favorite.svg"} alt="favorite" />
            </span>
          <img className='product-pic' src={item.images[0].src} alt="product" />
          <h4 className='product-name'>{item.title}</h4>
          <h6 className='product-price'>$14.00</h6>
        </div>
      ));
    
      itemElements.unshift(
        <div key="daily-routine" className='content-card'>
          <h2 className='title-routine'>Daily routine</h2>
          <p className='routine-content'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
        </div>
      );

  return (
        <Carousel   
        showDots={true}
        responsive={responsive}
        ssr={true} 
        draggable={true}
        arrows={true}>
            {itemElements}
        </Carousel>
    )
}

export default Products