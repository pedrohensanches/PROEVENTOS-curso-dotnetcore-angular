using System.Threading.Tasks;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<EventoDto> AddEvento(EventoDto entidade);
        Task<EventoDto> UpdateEvento(int id, EventoDto entidade);
        Task<bool> DeleteEvento(int id);
        Task<EventoDto[]> GetAllEventosAsync(bool incluePalestrantes = false);
        Task<EventoDto[]> GetAllEventosByTemaAsync(string tema, bool incluePalestrantes = false);
        Task<EventoDto> GetEventoByIdAsync(int id, bool incluePalestrantes = false);
    }
}