import { Button } from "../../components/core/Button"
import { Header } from "../../components/Header"
import { Content, StyledPageButtons } from "./styles"

interface PageButtonsProps {}

export const PageButtons: React.FC<PageButtonsProps> = () => {
  return (
    <StyledPageButtons className="page">
      <Header />
      <h2>Buttons</h2>

      <Content>
        <Button>Button component</Button>
        <Button disabled>Button component</Button>
      </Content>
    </StyledPageButtons>
  )
}
