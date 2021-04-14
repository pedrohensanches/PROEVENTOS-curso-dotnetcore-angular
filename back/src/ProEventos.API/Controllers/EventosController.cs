using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.Persistence;
using ProEventos.Domain;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventosController : ControllerBase
    {
        private readonly ProEventosContext _context;

        public EventosController(ProEventosContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }

        // [HttpGet("{query}")]
        // public Evento GetByTEmaOuLocal(string query)
        // {
        //     query = query.ToLower();
        //     return _context.Eventos.Where(e => e.Tema.ToLower().Contains(query) ||
        //     e.Local.ToLower().Contains(query)).FirstOrDefault();
        // }

        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _context.Eventos.Where(e => e.Id == id).FirstOrDefault();
        }

        [HttpPost]
        public string Post()
        {
            return "exemplo post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Deleter(int id)
        {
            return $"exemplo delete com id = {id}";
        }
    }
}
