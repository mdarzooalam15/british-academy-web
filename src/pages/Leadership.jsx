import directorImage from "../assets/director-dr-ar-khan.png";
function Leadership() {
  return (
    <main className="leadership-page">
      <section className="leadership-hero">
        <p className="eyebrow">THE PEOPLE BEHIND OUR VISION</p>
        <h1>Meet Our Leadership</h1>
        <p>
          Dedicated leadership. A shared vision. A commitment to nurturing every
          student's potential.
        </p>
      </section>

      <section className="leadership-intro">
        <p className="eyebrow">GUIDING THE JOURNEY</p>
        <h2>Leadership That Inspires Growth.</h2>
        <p>
          At British Academy, our leadership is committed to creating a positive
          learning environment where students are encouraged to explore, learn
          and grow with confidence.
        </p>
      </section>

      <section className="leadership-team">
        <div className="leadership-heading">
          <p className="eyebrow">OUR LEADERS</p>
          <h2>Meet the People Behind Our School</h2>
        </div>

        <div className="leader-card">
          <div className="leader-image">
            <img src={directorImage} alt="Director Dr. A. R. Khan" />
          </div>
          <div className="leader-info">
            <p className="eyebrow">SCHOOL LEADERSHIP</p>
            <h4> Dr. Abdul Rashid Khan Sir </h4>
            <h4> Director – British Academy</h4>
            <p>
              Dr. Abdul Rashid Khan Sir holds a Ph.D. in Economics and is
              associated with the leadership of British Academy, Raja Bagicha,
              Rafiganj, Bihar. With an academic background in Economics, he
              brings an educational perspective to the institution's vision. His
              focus is on creating a supportive learning environment,
              encouraging intellectual curiosity, nurturing students'
              confidence, and helping young learners build a strong foundation
              for their future. At British Academy, education is viewed as a
              journey of knowledge, character development, and lifelong
              learning.
            </p>
          </div>
        </div>
      </section>

      <div className="founder-card">
        <div className="founder-info">
          <p className="eyebrow">THE FOUNDER'S JOURNEY</p>

          <h3>Shafquat Tarannum Ma,am</h3>
          <h4>Founder – British Academy</h4>

          <div className="founder-milestone">
            <span>1995</span>
            <p>British Spoken English Coaching Centre</p>
          </div>

          <p>
            Shafquat Tarannum Ma,am is the founder of British Academy and a
            dedicated educationist and philanthropist. Her journey reflects a
            deep commitment to education, humanity and the service of society.
          </p>

          <p>
            Her journey in education took a significant step forward in 1995
            with the success of her British Spoken English Coaching Centre.
            Through her excellent communication skills, hard work and dynamic
            personality, she worked to make learning meaningful and accessible
            to students.
          </p>

          <p>
            She holds a Master's degree in English and a Bachelor of Education
            (B.Ed.). Although she got married while she was still at the
            matriculation stage, she never gave up on her dreams or her passion
            for education. With determination and perseverance, she continued
            her educational journey and remained committed to making a positive
            difference in society.
          </p>

          <p>
            Her vision has always been to support underprivileged children
            through education and create opportunities for those who may
            otherwise have limited access to learning. She sees serving the
            community as an important part of her mission in life.
          </p>

          <p>
            Through British Academy, she continues to pursue her vision of
            making quality education accessible and helping every child build a
            brighter future.
          </p>

          <p className="founder-belief">
            "Every child deserves the opportunity to learn and grow."
          </p>
        </div>
      </div>

      <section className="leadership-philosophy">
        <p className="eyebrow">OUR PHILOSOPHY</p>
        <h2>Education Beyond the Classroom.</h2>
        <p>
          We believe that education is not only about academic knowledge, but
          also about building confidence, curiosity, discipline and good values.
          Our aim is to encourage every student to learn, explore and prepare
          for a brighter future.
        </p>
      </section>
    </main>
  );
}

export default Leadership;
