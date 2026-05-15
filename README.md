# PPW Angular 21

Proyecto incremental de la materia Programacion y Plataformas Web, desarrollado con Angular 21.

## Resumen Del Proyecto

Este repositorio se construyo por practicas incrementales:

1. Setup base del proyecto y configuracion inicial.
2. Fundamentos de componentes standalone (`header`, `hero`, `footer`) con signals y pipes.
3. Navegacion por rutas (`home`, `students`, `students/:id`) con shell global.

## Historial Por Version (Tags)

### v1.0.0 - Practica 01 (Setup Inicial)

Tag: `v1.0.0`  
Commit: `960b7c6`

Cambios principales:

- Limpieza del template raiz en `src/app/app.html`.
- Ajuste de configuracion base en `src/app/app.ts`.
- Estilos globales iniciales en `src/styles.css`.
- Inclusion de guias de trabajo en `guias/01-instalacion-configuracion-practica.md` y `guias/02-fundamentos-angular-practica.md`.

### v1.2.0 - Practica 02 (Fundamentos)

Tag: `v1.2.0`  
Commit: `22cdc10`

Cambios principales:

- Composicion raiz en `src/app/app.ts` y `src/app/app.html`.
- Creacion de componentes standalone:
	- `src/app/components/app-header/`
	- `src/app/components/app-hero/`
	- `src/app/components/app-footer/`
- Footer con 5 pipes en plantilla (`uppercase`, `titlecase`, `date`, `number`, `percent`) en `src/app/components/app-footer/footer.html`.
- Nueva guia de navegacion en `guias/03-navegacion-practica.md`.

### v1.3.0 - Practica 03 (Navegacion)

Tag: `v1.3.0`  
Commit: `77c564c`

Cambio registrado en el tag:

- Ajuste en `src/app/components/app-hero/hero.html`.

Nota: aunque el commit etiquetado `v1.3.0` registra un cambio puntual, el estado actual del proyecto ya contiene estructura de navegacion por features (`home` y `students`) y rutas en `src/app/app.routes.ts`.

## Estructura Actual Relevante

```text
src/app/
	app.config.ts
	app.routes.ts
	app.ts
	app.html
	components/
		app-header/
		app-hero/
		app-footer/
	features/
		home/pages/home-page/
		students/pages/students-page/
		students/pages/student-detail-page/
```

## Comandos Utiles

```bash
pnpm install
pnpm start
pnpm exec ng build
pnpm test
```

Aplicacion local: `http://localhost:4200`
