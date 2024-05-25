import table from "../../assets/dashboard.png";
import girl from "../../assets/girl.png";
import days from "../../assets/days.png";
const Feature = () => {
  const items = [
    {
      id: 1,
      img: table,
      title: "Dashboard",
      p: "Designing Dashboards",
      year: 2020,
      desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      img: girl,
      title: "Illustration",
      p: "Vibrant Portraits of 2020",
      year: 2018,
      desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      img: days,
      title: "Typography",
      p: "36 Days of Malayalam type",
      year: 2020,
      desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <section class="features">
      <div class="wrapper">
        {items.map((item, index) => (
          // console.log(item)
          <div class="main" key={item.id}>
            <div>
              <img src={item.img} alt="photo" />
            </div>
            <div class="content">
              <h2>{item.p}</h2>
              <div class="content-date">
                <span>{item.year}</span>
                <span>{item.title} </span>
              </div>
              <p>{item.desc} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
