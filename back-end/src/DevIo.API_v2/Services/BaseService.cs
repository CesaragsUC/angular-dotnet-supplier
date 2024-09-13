
using DevIO.API.V1.Controllers;
using DevIO.Business.Intefaces;
using DevIO.Business.Models;
using DevIO.Business.Notificacoes;
using FluentValidation;
using FluentValidation.Results;
using Serilog;

namespace DevIO.API.Services
{
    public abstract class BaseService
    {
        private readonly INotificador _notificador;

        protected BaseService(INotificador notificador)
        {
            _notificador = notificador;
        }

        protected void Notificar(ValidationResult validationResult)
        {
            foreach (var error in validationResult.Errors)
            {
                Notificar(error.ErrorMessage);
            }
        }

        protected void Notificar(string mensagem)
        {
            _notificador.Handle(new Notificacao(mensagem));
        }

        protected bool ExecutarValidacao<TV, TE>(TV validacao, TE entidade) where TV : AbstractValidator<TE> where TE : Entity
        {
            var validator = validacao.Validate(entidade);

            if (validator.IsValid) return true;

            Notificar(validator);

            return false;
        }

        protected async Task<bool> SaveAsync<T>(IEnumerable<T> dataList, Func<T, Task> repository)
        where T : Entity, new()
        {
            var isValid = true;
            foreach (var data in dataList)
            {
                try
                {
                    await repository(data);
                }
                catch (Exception ex)
                {

                    Log.Fatal(
                        ex,
                        "Houve um erro ao salvar na tabela {Tabela} com {Id}",
                        typeof(T).Name,
                        data?.Id);

                    isValid = false;
                }
            }
            return isValid;
        }

        protected async Task<bool> SaveAsync<T>(T data, Func<T, Task> repository)
        where T : class, new()
        {
            var isValid = false;

            try
            {
                await repository(data);
            }
            catch (Exception ex)
            {
                Log.Fatal(ex,
                     "Houve um erro ao salvar na tabela {Tabela}",
                     typeof(T).Name);

                isValid = false;
            }

            return isValid;
        }

    }
}