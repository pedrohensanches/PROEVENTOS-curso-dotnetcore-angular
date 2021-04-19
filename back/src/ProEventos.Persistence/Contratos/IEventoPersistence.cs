using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventoPersistence
    {
        Task<Evento[]> GetAllEventosAsync(bool incluePalestrantes = false);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool incluePalestrantes = false);
        Task<Evento> GetEventoByIdAsync(int id, bool incluePalestrantes = false);
    }
}