package pe.edu.upeu.sysalmacen.control;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.upeu.sysalmacen.dtos.CategoriaDTO;
import pe.edu.upeu.sysalmacen.dtos.UnidadMedidaDTO;
import pe.edu.upeu.sysalmacen.mappers.UnidadMedidaMapper;
import pe.edu.upeu.sysalmacen.modelo.UnidadMedida;
import pe.edu.upeu.sysalmacen.servicio.IUnidadMedidaService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/unidadmedida")
@CrossOrigin("*")
public class UnidadMedidaController {
    private final IUnidadMedidaService unidadMedidaService;
    private final UnidadMedidaMapper unidadMedidaMapper;
    @GetMapping
    public ResponseEntity<List<UnidadMedidaDTO>> findAll() {
        List<UnidadMedidaDTO> list = unidadMedidaMapper.toDTOs(unidadMedidaService.findAll());
        return ResponseEntity.ok(list);
    }
}
