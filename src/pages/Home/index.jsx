import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <>
      <main className="main-info">
        <section className="info">
          <section className="invite">
            <Title className="title">Crie seus vídeos online</Title>
            <Subtitle className="subtitle">
              Transforme suas ideias em filmes memoráveis: onde a criatividade
              encontra a simplicidade.
            </Subtitle>
            <Button className="button">Começar agora!</Button>
          </section>
          <img
            src="/assets/images/hero.png"
            alt="Ilustração de um homem pulando entre plataformas"
            className="media"
          />
        </section>
        <section className="cards">
          <Card.Root className="cards__card youtube-card">
            <div className="card__card-header">
              <Card.Number className="card-header__number" number="01" />
              <Card.Image
                className="card-header__image"
                src="/assets/images/youtube.png"
                name="Youtube Image"
              />
            </div>
            <Card.Title title="Youtube" />
            <Card.Subtitle
              subtitle="Produza conteúdo cativante e conquiste seu público com vídeos de
              alta qualidade no maior palco digital do mundo."
            />
          </Card.Root>
          <Card.Root className="cards__card tiktok-card">
            <div className="card__card-header">
              <Card.Number className="card-header__number" number="02" />
              <Card.Image
                className="card-header__image"
                src="/assets/images/tiktok.png"
                alt="Tiktok Image"
              />
            </div>
            <Card.Title title="TikTok" />
            <Card.Subtitle
              subtitle="Faça sua criatividade brilhar em vídeos curtos e envolventes que
                vão cativar a comunidade global do TikTok."
            />
          </Card.Root>
          <Card.Root className="cards__card facebook-card">
            <div className="card__card-header">
              <Card.Number className="card-header__number" number="03" />
              <Card.Image
                className="card-header__image"
                src="/assets/images/facebook.png"
                alt="Facebook Image"
              />
            </div>
            <Card.Title title="Facebook" />
            <Card.Subtitle
              subtitle="Conecte-se com sua audiência de forma autêntica e impactante
                através de vídeos que se destacam no feed do Facebook."
            />
          </Card.Root>
          <Card.Root className="cards__card instagram-card">
            <div className="card__card-header">
              <Card.Number className="card-header__number" number="04" />
              <Card.Image
                className="card-header__image"
                src="/assets/images/instagram.png"
                alt="Instagram Image"
              />
            </div>
            <Card.Title title="Instagram" />
            <Card.Subtitle
              subtitle="Compartilhe suas histórias de maneira única e conquiste milhões
                de likes no Instagram utilizando Stories e Reels."
            />
          </Card.Root>
        </section>
      </main>
    </>
  );
};
