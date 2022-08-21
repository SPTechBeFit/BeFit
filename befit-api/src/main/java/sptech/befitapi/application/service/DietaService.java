package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.application.entity.ValorNutricional;
import sptech.befitapi.application.response.ValorNutricionalResponse;
import sptech.befitapi.resources.repository.IngredienteRepository;

import java.util.List;

@Service
public class DietaService {
    @Autowired
    private IngredienteRepository ingredienteRepository;

    public ValorNutricionalResponse findValorNutricional(List<ValorNutricional> valorNutricional){
        double totalProteina = 0.0;
        int totalPorcao = 0;
        double totalLipidio = 0.0;
        double totalCarboidrato = 0.0;
        double totalSodio = 0.0;
        double totalCaloria = 0.0;

        for (ValorNutricional vn:
                valorNutricional) {
            totalProteina+= (vn.getProteina() * vn.getQuantidade());
            totalPorcao+= (vn.getPorcao() * vn.getQuantidade());
            totalLipidio+= (vn.getLipidio() * vn.getQuantidade());
            totalCarboidrato+= (vn.getCarboidrato() * vn.getQuantidade());
            totalSodio+= (vn.getSodio() * vn.getQuantidade());
            totalCaloria+= (vn.getCaloria() * vn.getQuantidade());

            vn.setProteina(vn.getProteina() * vn.getQuantidade());
            vn.setPorcao(vn.getPorcao() * vn.getQuantidade());
            vn.setLipidio(vn.getLipidio() * vn.getQuantidade());
            vn.setCarboidrato(vn.getCarboidrato() * vn.getQuantidade());
            vn.setSodio(vn.getSodio() * vn.getQuantidade());
            vn.setCaloria(vn.getCaloria() * vn.getQuantidade());

        }

        return new ValorNutricionalResponse(totalProteina, totalPorcao, totalLipidio, totalCarboidrato, totalSodio, totalCaloria, valorNutricional);
    }
}
