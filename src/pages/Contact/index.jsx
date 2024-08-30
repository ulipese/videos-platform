import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Contact = () => {
  return (
    <>
      <main className="main-contact">
        <section className="contact">
          <Title className="title">Dúvidas e suporte, entre em contato:</Title>
          <div className="contact__icons">
            <img
              src="/assets/images/twitterIcon.svg"
              alt="Twitter Icon"
              className="invite__icon"
            />
            <img
              src="/assets/images/instagramIcon.svg"
              alt="Instagram Icon"
              className="invite__icon"
            />
            <img
              src="/assets/images/discordIcon.svg"
              alt="Discord Icon"
              className="invite__icon"
            />
          </div>
        </section>
        <div className="info__form">
          <Input label="Name:" inputType="text" />
          <Input label="E-mail:" inputType="email" />
          <Input label="Mensagem:" inputType="textArea" />
          <Button className="form__button">Enviar</Button>
        </div>
      </main>
    </>
  );
};
