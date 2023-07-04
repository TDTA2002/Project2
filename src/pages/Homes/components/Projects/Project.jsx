import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../../../img/color-sharp2.png";
import './Projects.scss';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://photo2.tinhte.vn/data/attachment-files/2017/12/4194176_Dark-Star-Orianna-Khazix-LoL-4K-Wallpaper.jpg",
    },
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://khoanh24.com/uploads/w300//2020/03/05/hinh-nen-soraka-hac-tinh-1_d43de50c1.jpg",
    },
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://maytinhvui.com/wp-content/uploads/2020/11/hinh-nen-may-tinh-4k-game-free-fire-min.jpg",
    },
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://tenovi.net/public/upload/images/2017/11/24/chia-se-bo-anh-nen-4k-game-va-phim-danh-cho-may-tinh_2_8.png",
    },
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://file.vfo.vn/hinh/2015/11/halo-5-guardians-videos-games-1-wallpaper-by-twalls.jpg",
    },
    {
      title: "Sống dai thành huyền thoại",
      description: "Game & Project",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZicyiZP5clhxMQ5ezs4m4GWbAWmJjgKiYA&usqp=CAU",
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
               
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
