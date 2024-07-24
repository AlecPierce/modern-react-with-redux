import Button from "../components/Button";
import {
  RiZzzFill,
  RiAlertFill,
  RiAlertLine,
  RiAddCircleFill,
  RiAddCircleLine,
  RiCheckFill,
} from "react-icons/ri";

function ButtonPage() {
  return (
    <div className="flex justify-center">
      <div>
        <Button>
          <RiZzzFill />
          Plain
        </Button>
        <Button rounded>
          <RiZzzFill />
          Plain
        </Button>
        <Button rounded outline>
          <RiZzzFill />
          Plain
        </Button>
        <Button outline>
          <RiZzzFill />
          Plain
        </Button>
      </div>
      <div>
        <Button primary>
          <RiAddCircleFill />
          Primary
        </Button>
        <Button primary rounded>
          <RiAddCircleFill />
          Primary
        </Button>
        <Button primary rounded outline>
          <RiAddCircleFill />
          Primary
        </Button>
        <Button primary outline>
          <RiAddCircleFill />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <RiAddCircleLine />
          Secondary
        </Button>
        <Button secondary rounded>
          <RiAddCircleLine />
          Secondary
        </Button>
        <Button secondary rounded outline>
          <RiAddCircleLine />
          Secondary
        </Button>
        <Button secondary outline>
          <RiAddCircleLine />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <RiCheckFill />
          Success
        </Button>
        <Button success rounded>
          <RiCheckFill />
          Success
        </Button>
        <Button success rounded outline>
          <RiCheckFill />
          Success
        </Button>
        <Button success outline>
          <RiCheckFill />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <RiAlertLine />
          Warning
        </Button>
        <Button warning rounded>
          <RiAlertLine />
          Warning
        </Button>
        <Button warning rounded outline>
          <RiAlertLine />
          Warning
        </Button>
        <Button warning outline>
          <RiAlertLine />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <RiAlertFill />
          Danger
        </Button>
        <Button danger rounded>
          <RiAlertFill />
          Danger
        </Button>
        <Button danger rounded outline>
          <RiAlertFill />
          Danger
        </Button>
        <Button danger outline>
          <RiAlertFill />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
