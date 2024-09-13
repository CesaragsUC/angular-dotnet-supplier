import { Provider } from "@angular/core";
import { FornececedorGuard } from "../fornecedor/services/fornecedor.guard";
import { ProdutoGuard } from "../produto/services/produto.guard";


export const BASE_GUARD_PROVIDERS : Provider[] = [
    FornececedorGuard,
    ProdutoGuard,
  ];