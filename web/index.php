<?php

use 
	Symfony\Component\HttpFoundation\Request,
	Symfony\Component\HttpFoundation\Response;

$app = include __DIR__ . '/../app/bootstrap.php';

$app->get('/', function() use ($app) {
    return $app['twig']->render('select.twig', array());
});

$app->post('/play', function() use ($app) {
	$return = array('chords' => array(), 'interval' => '');

	foreach($app['request']->get('chords') as $chord) {
		$return['chords'][] = "/img/chords/" . md5($chord) . ".png";
	}

	$return['interval'] = $app['request']->get('interval');
	$return['chords'] = json_encode($return['chords']);

	return $app['twig']->render('play.twig', $return);
});

$app->run();