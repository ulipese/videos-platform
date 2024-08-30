import { Title } from "../../components/Title";
import { Subtitle } from "../../components/Subtitle";
import { Button } from "../../components/Button";
import { PlanCard } from "../../components/PlanCard";

export const About = () => {
  return (
    <>
      <main className="main-info">
        <section className="info">
          <section className="invite">
            <Title className="title">Bem-vindo à revolução dos vídeos!</Title>
            <Subtitle className="subtitle">
              Somos uma startup com o objetivo de facilitar a produção de
              conteúdo em larga escala com qualidade profissional, capaz de
              atingir uma audiência de milhões de seguidores.
            </Subtitle>
            <Button className="button">Baixe o app</Button>
          </section>
          <section className="info__about-images">
            <img
              src="/assets/images/aboutImage2.png"
              alt="Imagem de Celular do Sobre 1"
              className="about-images__image"
            />
            <img
              src="/assets/images/aboutImage1.png"
              alt="Imagem de Celular do Sobre 2"
              className="about-images__image"
            />
          </section>
        </section>
        <section className="second-main-content">
          <header className="nav">
            <nav>
              <ul>
                <li>
                  <a>Planos</a>
                </li>
              </ul>
            </nav>
          </header>
          <section className="plans">
            <PlanCard.Root>
              <PlanCard.Header title="Individual" highlighted />
              <PlanCard.Body
                highlighted
                quantityUsers="1 Usuário"
                options={[
                  { quantity: 10, price: 15 },
                  { quantity: 20, price: 25 },
                  { quantity: 30, price: 35 },
                ]}
              />
              <PlanCard.Footer buttonName="Cadastrar" highlighted />
            </PlanCard.Root>
            <PlanCard.Root>
              <PlanCard.Header title="Profissional - Times" />
              <PlanCard.Body
                quantityUsers="1-10 Usuários"
                options={[
                  { quantity: 10, price: 15 },
                  { quantity: 20, price: 25 },
                  { quantity: 30, price: 35 },
                ]}
              />
              <PlanCard.Body
                quantityUsers="+10 Usuários"
                options={[
                  { quantity: 20, price: 15 },
                  { quantity: 40, price: 35 },
                  { quantity: 80, price: 55 },
                ]}
              />
              <PlanCard.Footer buttonName="Cadastrar" />
            </PlanCard.Root>
            <PlanCard.Root>
              <PlanCard.Header title="Corporativo" />
              <PlanCard.Body imageUrl="/assets/images/aboutCardImage.png" />
              <PlanCard.Footer buttonName="Entre em Contato" />
            </PlanCard.Root>
            {/* <PlanCard
              title=""
              quantityUsers={``}
              options={[
                { quantity: 10, price: 15 },
                { quantity: 20, price: 25 },
                { quantity: 30, price: 35 },
              ]}
              highlighted
              buttonName={"Cadastrar"}
            />
            <PlanCard
              title="Individual"
              quantityUsers={`1 Usuário`}
              options={[
                { quantity: 10, price: 15 },
                { quantity: 20, price: 25 },
                { quantity: 30, price: 35 },
              ]}
              highlighted
            /> */}
          </section>
        </section>
      </main>
    </>
  );
};
