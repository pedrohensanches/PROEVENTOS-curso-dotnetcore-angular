using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento> AddEvento(Evento entidade);
        Task<Evento> UpdateEvento(int id, Evento entidade);
        Task<bool> DeleteEvento(int id);
        Task<Evento[]> GetAllEventosAsync(bool incluePalestrantes = false);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool incluePalestrantes = false);
        Task<Evento> GetEventoByIdAsync(int id, bool incluePalestrantes = false);
    }
}