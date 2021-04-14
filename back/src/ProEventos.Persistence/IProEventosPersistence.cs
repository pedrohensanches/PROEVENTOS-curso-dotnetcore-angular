using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public interface IProEventosPersistence
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteRange<T>(T[] entityArray) where T : class;
        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventosAsync(bool incluePalestrantes);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool incluePalestrantes);
        Task<Evento> GetAllEventoByIdAsync(int id, bool incluePalestrantes);

        //PALESTRANTES
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante> GetPalestranteByIdAsync(int id, bool includeEventos);
    }
}