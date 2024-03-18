import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import "@testing-library/react"
import App from "./App"
import Home from "./components/pages/home";

describe("Testes de funções", () => {
   
    it('should render NotFound component when entering a non existing route', () => {
        render(
        <MemoryRouter initialEntries={['/']}>
                <Home/>
        </MemoryRouter> 
        );
        
        const notFoundText = screen.getByText('Bem vindo ao')
        expect(notFoundText).toBeInTheDocument()
    })
    
});

export {};